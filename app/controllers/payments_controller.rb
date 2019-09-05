class PaymentsController < ApplicationController
  before_action :set_order

  def new
    @final_price = (@order.price * @order.amount)
    @final_display_price = @final_price / 100
  end

  def create
    @final_price = (@order.price * @order.amount)
    @final_display_price = @final_price / 100
    if current_user.stripe_id.nil?
      customer = Stripe::Customer.create(
        source: params[:stripeToken],
        email:  params[:stripeEmail],
      )
      current_user.update(stripe_id: customer.id)
    end

    charge = Stripe::Charge.create(
      customer:     customer.id, #current_user.stripe_id, # You should store this customer id and re-use it.
      amount:       @final_price,
      description:  "Payment of #{@final_display_price} EUR for #{@order.amount} pixels.",
      currency:     "eur"
    )
    @order.update(payment: charge.to_json, state: 'paid')
    current_user.update(pixel_credits: current_user.pixel_credits + @order.amount)
    flash[:notice] = "You've added #{@order.amount} pixels!"
    redirect_to '/'
  rescue Stripe::CardError => e
    flash[:alert] = e.message
    redirect_to new_order_payment_path(@order)
  end

  private

  def set_order
    @order = current_user.orders.where(state: 'pending').find(params[:order_id])
  end
end
