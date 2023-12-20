
function addTask(taskName) {
    $('#taskList').append('<li>' + taskName + '</li>');
  }

  $('#taskList').on('click', 'li', function() {
    $(this).toggleClass('completed');
  });


  $('#taskForm').submit(function(e) {
    e.preventDefault(); 

    let taskName = $('#taskName').val();
    if (taskName.trim() !== '') {
      addTask(taskName);
      $('#taskName').val(''); 
    }

  });

  