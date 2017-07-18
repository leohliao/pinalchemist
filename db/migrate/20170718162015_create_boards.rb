class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string :board_name, null: false
      t.integer :user_id, null: false
      t.text :description

      t.timestamps null: false
    end

    add_index :boards, :user_id
  end
end
