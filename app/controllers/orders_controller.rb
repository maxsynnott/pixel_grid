class OrdersController < ApplicationController
  # skip_before_action :authenticate_user!, only: [:create]
  def create
    @order = Order.new(state: "pending", amount: params[:amount], price: 60)
    @order.user = current_user
    @order.save
    redirect_to new_order_payment_path(@order)
  end

  def show
    # @order = Order.where(user_id: current_user[:id])
  end

  def index
    #@order = Order.where(user_id: current_user[:id])
    @order = current_user.orders.where(state: 'paid')
  end

  private

  def order_params
    params.require(:order).permit(:amount, :state, :price)
  end

  def set_order
    @order = Order.find(params[:id])
  end
end
