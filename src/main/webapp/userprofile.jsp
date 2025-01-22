<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile - Ecoshop</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center">User Profile</h2>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <!-- User Profile Info -->
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" id="userName">Full Name: John Doe</h5>
                        <p class="card-text" id="userEmail">Email: johndoe@example.com</p>
                        <p class="card-text" id="userPassword">Password: *********</p>
                        <!-- Option to Edit Profile -->
                        <a href="edit-profile.html" class="btn btn-warning w-100 mb-3">Edit Profile</a>
                        <!-- Logout Option -->
                        <button id="logoutBtn" class="btn btn-danger w-100">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="scripts.js"></script>
</body>
</html>

