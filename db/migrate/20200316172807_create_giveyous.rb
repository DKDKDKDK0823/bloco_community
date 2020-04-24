class CreateGiveyous < ActiveRecord::Migration[5.2]
  def change
    create_table :giveyous do |t|
      t.string :title
      t.integer :user_id
      t.timestamps
    end
  end
end
