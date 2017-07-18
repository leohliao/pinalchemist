class CreateFollowings < ActiveRecord::Migration[5.0]
  def change
    create_table :followings do |t|
      t.integer :following_id, null: false
      t.integer :follower_id, null: false

      t.timestamps null: false
    end

    add_index :followings, [:following_id, :follower_id], unique: true
  end
end
