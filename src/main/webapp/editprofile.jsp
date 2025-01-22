<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Profile - Ecoshop</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center">Edit Profile</h2>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form id="editProfileForm">
                    <!-- Edit Full Name -->
                    <div class="mb-3">
                        <label for="editUsername" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="editUsername" placeholder="Enter your full name" required>
                    </div>
                    <!-- Edit Email -->
                    <div class="mb-3">
                        <label for="editEmail" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="editEmail" placeholder="Enter email" required>
                    </div>
                    <!-- Edit Password -->
                    <div class="mb-3">
                        <label for="editPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="editPassword" placeholder="Create password" required>
                    </div>
                    <!-- Confirm Password -->
                    <div class="mb-3">
                        <label for="editConfirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="editConfirmPassword" placeholder="Confirm password" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Save Changes</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="scripts.js"></script>
</body>
</html>
