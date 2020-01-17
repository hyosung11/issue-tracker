const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesLists = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (let i = 0; i < issues.length; i++) {
    const id = issues[i].id;
    const desc = issues[i].description;
    const severity = issues[i].severity;
    const assignedTo = issues[i].assignedTo;
    const status = issues[i].status;

    issuesList.innerHTML += '<div class="well">'+
                            '<h6> Issue ID: ' + id + '</h6>'+
                            '<p>'
                            '<p><span class="glyphicon glyphicon-time">'
  }
}
