describe("Teams", function() { describe("#Index", function() {

    it("should append the value of the input to the team_list", function() {
      var $input = $('<input id="team_name" value="Celtics"/>');
      var $teamList = $('<div class="team_list" />');

      $('#jasmine_content').append($input).append($teamList);

      App.Team.addTeam();

      expect($('#jasmine_content .team_list')).toHaveText("Celtics");
    });
  });
});
