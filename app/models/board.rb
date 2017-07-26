# == Schema Information
#
# Table name: boards
#
#  id          :integer          not null, primary key
#  board_name  :string           not null
#  user_id     :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ApplicationRecord

  validates :board_name, :user_id, presence: true
  validates :board_name, uniqueness: { scope: :user_id,
    message: "Board name has been used, try a different name" }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

end
