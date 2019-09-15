class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: [:home]

  def home
    @grid = Grid.last
    @orders = Order.where(user_id: current_user[:id]) if current_user
    @show = true if @orders
    @queue = @grid.queue
    render 'grids/show'
  end
end
