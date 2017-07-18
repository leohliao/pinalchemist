class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.integer :user_id, null: false
      t.text :description

      t.timestamps null: false
    end

    add_index :pins, :user_id
  end
end
