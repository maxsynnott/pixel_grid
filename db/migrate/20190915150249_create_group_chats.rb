class CreateGroupChats < ActiveRecord::Migration[5.2]
  def change
    create_table :group_chats do |t|
      t.string :name
      t.references :grid, foreign_key: true

      t.timestamps
    end
  end
end
