# == Schema Information
#
# Table name: pins
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  image_url   :string           not null
#  user_id     :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pin < ApplicationRecord
  validates :title, :image_url, :user_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :pinnings,
    primary_key: :id,
    foreign_key: :pin_id,
    class_name: :Pinning,
    dependent: :destroy

  has_many :boards,
    through: :pinnings,
    source: :board

end
