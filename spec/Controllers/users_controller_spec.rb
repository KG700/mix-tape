require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  # before do
  #   request.env['omniauth.auth'] = OmniAuth.config.mock_auth[:spotify]
  # end
  # let (:user) { double :user, auth_token: '12345', username: 'Test', spotify_id: 'test-username', image_url: 'https://test-pic.com/test' }
  
  # describe 'spotify' do
  #   it 'responds with 200' do
  #     post :spotify
  #     expect(response).to have_http_status(200)
  #   end
    
    # it "should successfully create a user" do
    #   expect {
    #     post :spotify
    #     @user = User.create { :user }
    #   }.to change{ User.count }.by(1)
    # end
  # end

  # describe 'POST /' do
  #   before(:each) do
  #     @post = Post.create(user_id: @user.id, message: 'Hello, world!')
  #   end

  #   it 'responds with 200' do
  #     expect(response).to have_http_status(200)
  #   end

  #   it 'creates a post' do
  #     expect(@post).to be_a_new(Post)
  #   end

  #   it 'edits a post' do
  #     @post.update(user_id: @user.id, message: 'This is a change')
  #     expect(@post.message).to eq('This is a change')
  #   end

  #   it 'deletes a post' do
  #     @post.destroy
  #     expect(@post).not_to be(Post)
  #   end
  # end

  # describe 'GET /' do
  #   it 'responds with 200' do
  #     get :index
  #     expect(response).to have_http_status(200)
  #   end
  # end
end
