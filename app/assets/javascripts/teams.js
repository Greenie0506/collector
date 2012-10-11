App.Team = {
  addTeam: function() {
    var teamName = $('#team_name').val();
    var $teamList = $('.team_list');

    $teamList.append(teamName);
    return false;
  }
};

