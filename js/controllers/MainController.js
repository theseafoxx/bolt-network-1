app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [{
    series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  },
  {
    series: "Last Week Tonight with John Oliver",
    series_img: "http://cdn.fansided.com/wp-content/blogs.dir/280/files/2015/08/last-week-tonight-with-john-oliver-e1424202484681.jpg",
    genre: "Comedy, News satire",
    season: 3,
    episode: "Episode 33",
    description: "John Oliver is an Emmy-winning writer on \"The Daily Show With Jon Stewart,\" but it wasn't until he guest-hosted that show in the summer of 2013 that HBO took notice of his \"singular perspective and distinct voice.\" Thanks to that memorable gig, Oliver gets to show off his talent in front of HBO's camera on \"Last Week Tonight.\" The late-night series sees the British comic review what happened the past seven days in news, politics and current events, all with a heavy dose of satire, of course. Since 2010, Oliver has been a fixture on Comedy Central hosting a stand-up show in New York, and he also co-writes and co-presents the popular weekly satirical podcast \"The Bugle.\"",
    datetime: new Date(2015, 11, 8, 21, 00, 00, 00)
  }
  
  ];
}]);