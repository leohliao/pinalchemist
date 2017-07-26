# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  image_url       :string
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :pins,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Pin"

  has_many :boards
  has_many :following
  has_many :followee

  attr_reader :password

  after_initialize :ensure_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.valid_password?(password) ? user : nil
  end

  def reset_token
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  def ensure_token
    self.session_token ||= generate_token
  end

  private
  def generate_token
    SecureRandom.urlsafe_base64
  end

#to ensure you can still update your currentUser status
  def ensure_token_uniqueness
    self.session_token = generate_token
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_token
    end
    self.session_token
  end
end
