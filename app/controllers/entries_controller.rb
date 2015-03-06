class EntriesController < ApplicationController
  respond_to :json

  def index
    @entries = Entry.all
  end

  def show 
    @entry = Entry.find params[:id]
  end

  def new 
    @entry = Entry.new
  end

  def edit 
    @entry = Entry.find params[:id]
  end

  def create
    @entry = Entry.create entry_params
  end

  def update 
    @entry = Entry.find params[:id]
    @entry.update_attributes entry_params
  end

  def destroy
    @entry = Entry.find params[:id]
    @entry.destroy
  end

private
  def entry_params
    params.require(:entry).permit(:title, :content)
  end
end
