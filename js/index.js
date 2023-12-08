function addContent() {
    var content = document.getElementById('contentInput').value;
    database.ref('contents').push({
      text: content
    });
  }

  function updateContent() {
    // Implement update logic using Firebase
    
  }

  function deleteContent() {
    // Implement delete logic using Firebase
    
  }

  // Listen for changes in the Firebase database
  database.ref('contents').on('value', function(snapshot) {
    var contentBox = document.getElementById('contentBox');
    contentBox.innerHTML = '';

    snapshot.forEach(function(childSnapshot) {
      var content = childSnapshot.val().text;
      var contentKey = childSnapshot.key;

      // Create a box for each content item
      var contentItem = document.createElement('div');
      contentItem.textContent = content;

      // Attach data-key attribute to identify the content's key
      contentItem.setAttribute('data-key', contentKey);

      // Add click event listener for updating and deleting
      contentItem.addEventListener('click', function() {
        // You can implement update or delete logic here
        console.log('Clicked on content with key:', contentKey);
      });

      contentBox.appendChild(contentItem);
    });
  });
