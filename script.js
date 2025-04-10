// script.js
 

 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 const body = document.body;
 

 darkModeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  const isDarkMode = body.dataset.theme === 'dark';
  darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
 });
 

 // Goal and Objective Tracker
 const goalForm = document.getElementById('goalForm');
 const goalList = document.getElementById('goalList');
 

 goalForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (goalForm.checkValidity() === false) {
  event.stopPropagation();
  goalForm.classList.add('was-validated');
  return;
  }
 

  const goalName = document.getElementById('goalName').value;
  const goalDeadline = document.getElementById('goalDeadline').value;
  const keyMetrics = document.getElementById('keyMetrics').value;
 

  const goalItem = document.createElement('li');
  goalItem.classList.add('list-group-item');
  goalItem.innerHTML = `<strong>${goalName}</strong> - Deadline: ${goalDeadline}<br>Metrics: ${keyMetrics}`;
  goalList.appendChild(goalItem);
  showNotification('Goal added successfully!');
 

  //Clear the input fields
  document.getElementById('goalName').value = "";
  document.getElementById('goalDeadline').value = "";
  document.getElementById('keyMetrics').value = "";
 

  goalForm.classList.remove('was-validated');
 });
 

 // Performance Reviews
 const reviewForm = document.getElementById('reviewForm');
 const reviewList = document.getElementById('reviewList');
 

 reviewForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (reviewForm.checkValidity() === false) {
  event.stopPropagation();
  reviewForm.classList.add('was-validated');
  return;
  }
 

  const employeeName = document.getElementById('employeeName').value;
  const reviewerType = document.getElementById('reviewerType').value;
  const performanceRating = document.getElementById('performanceRating').value;
  const reviewComments = document.getElementById('reviewComments').value;
 

  const reviewItem = document.createElement('li');
  reviewItem.classList.add('list-group-item');
  reviewItem.innerHTML = `<strong>${employeeName}</strong> - ${reviewerType} - Rating: ${performanceRating}<br>Comments: ${reviewComments}`;
  reviewList.appendChild(reviewItem);
  showNotification('Review submitted successfully!');
  updateDashboard();
 

  //Clear the input fields
  document.getElementById('employeeName').value = "";
  document.getElementById('reviewerType').value = "manager";
  document.getElementById('performanceRating').value = "";
  document.getElementById('reviewComments').value = "";
 

  reviewForm.classList.remove('was-validated');
 });
 

 // Progress Dashboard
 const goalsCompletedElement = document.getElementById('goalsCompleted');
 const reviewsGivenElement = document.getElementById('reviewsGiven');
 const averageRatingElement = document.getElementById('averageRating');
 

 function updateDashboard() {
  goalsCompletedElement.textContent = goalList.children.length;
  reviewsGivenElement.textContent = reviewList.children.length;
 

  let totalRating = 0;
  for (let i = 0; i < reviewList.children.length; i++) {
  const reviewText = reviewList.children[i].textContent;
  const rating = parseInt(reviewText.match(/Rating: (\d+)/)?.[1] || 0);
  totalRating += rating;
  }
 

  const average = reviewList.children.length > 0 ? (totalRating / reviewList.children.length).toFixed(1) : 'N/A';
  averageRatingElement.textContent = average;
  updateChart();
 }
 

 // Chart
 const performanceChartCanvas = document.getElementById('performanceChart').getContext('2d');
 let performanceChart;
 

 function updateChart() {
  const labels = ['Goals Completed', 'Reviews Given', 'Average Rating'];
  const data = [parseInt(goalsCompletedElement.textContent), parseInt(reviewsGivenElement.textContent), parseFloat(averageRatingElement.textContent) || 0];
 

  if (performanceChart) {
  performanceChart.destroy();
  }
 

  performanceChart = new Chart(performanceChartCanvas, {
  type: 'bar',
  data: {
  labels: labels,
  datasets: [{
  label: 'Performance Metrics',
  data: data,
  backgroundColor: [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)'
  ],
  borderColor: [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)'
  ],
  borderWidth: 1
  }]
  },
  options: {
  scales: {
  y: {
  beginAtZero: true
  }
  }
  }
  });
 }
 

 // Notifications
 const notificationArea = document.getElementById('notificationArea');
 

 function showNotification(message) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
  notificationArea.appendChild(notification);
 

  setTimeout(() => {
  notification.remove();
  }, 3000);
 }
 

 // Initial Dashboard Update
 updateDashboard();