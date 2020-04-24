class GiveyousController < ApplicationController
  def index
    @giveyous = Giveyou.all
  end

  def show
  end

  def new
    @giveyou = Giveyou.new
  end

  def edit
  end

  def create
    @giveyou = Giveyou.new(giveyou_params)
    @giveyou.user_id = current_user.id
    @giveyou.save
    redirect_to giveyous_path
  end

  private

  def giveyou_params
    params.require(:giveyou).permit(:title, :user_id)
  end
end
