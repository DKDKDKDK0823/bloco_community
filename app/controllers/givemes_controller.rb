class GivemesController < ApplicationController
  def index
    @givemes = Giveme.all
  end

  def show
  end

  def new
    @giveme = Giveme.new
  end

  def edit
  end

  def create
    @giveme = Giveme.new(giveme_params)
    @giveme.user_id = current_user.id
    @giveme.save
    redirect_to givemes_path
  end

  private

  def giveme_params
    params.require(:giveme).permit(:title, :user_id)
  end

end
