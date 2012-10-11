require 'spec_helper'

feature "Teams" do
  scenario "Adding a team", js: true do
    visit root_path
    fill_in "Team Name", with: "Celtics"
    click_button "Add Team"
    within ".team_list" do
      page.should have_content "Celtics"
    end
  end
end
