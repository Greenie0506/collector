App.initialize = function() {
  $(document).on("submit", "#teams", App.Team.addTeam)
};
