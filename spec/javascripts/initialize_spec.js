describe("Initialize", function() {

  it("connects the addTeam to the submission of the form", function() {
    $('#jasmine_content').append("<form id='teams'></form>");

    spyOn($.fn, "on");
    App.initialize();

   expect($.fn.on).toHaveBeenCalledWith("submit", "#teams", App.Team.addTeam);
   expect($.fn.on.mostRecentCall.object[0]).toBe(document);
  });
});

