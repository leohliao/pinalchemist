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
  # include PgSearch
  # multisearchable :against => :board_name
  # pg_search_scope :whose_board_name_starts_with, against: :board_name, using: {tsearch: {prefix: true}}

  validates :board_name, :user_id, presence: true
  validates :board_name, uniqueness: { scope: :user_id,
    message: "Board name has been used, try a different name" }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :pinnings, dependent: :destroy

  has_many :pins,
    through: :pinnings,
    source: :pin

  # def pin_ids
  #   # get the ids in the table column
  #   self.pins.pluck(:id)
  # end
end
