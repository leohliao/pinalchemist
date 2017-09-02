# == Schema Information
#
# Table name: followings
#
#  id           :integer          not null, primary key
#  following_id :integer          not null
#  follower_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Following < ApplicationRecord
  validates :following_id, :follower_id, presence: true

  belongs_to :disciple,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :User

  belongs_to :master,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

end
