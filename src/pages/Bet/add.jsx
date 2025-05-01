import React from "react";
import "../../styles/CreateUserForm.css";

const CreateBetForm = () => {
  return (
    <>
        <div className="right-content w-100">
            <div className="user-form-container">
            {/* Header */}
            <div className="user-form-header">
                <h3 className="user-form-title">Create New Stake</h3>
                <p className="user-form-subtitle">
                Fill in the details below to add a new user to the system
                </p>
            </div>

            {/* Form content */}
            <div className="user-form-content">
                <form>
                <div className="form-grid">
                    <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required />
                    </div>

                    <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                    </div>

                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    <p className="helper-text">Password must be at least 8 characters</p>
                    </div>

                    <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>

                    <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select id="role" name="role" required>
                        <option value="">Select Role</option>
                        <option value="admin">Administrator</option>
                        <option value="editor">Editor</option>
                        <option value="viewer">Viewer</option>
                        <option value="support">Support</option>
                    </select>
                    </div>

                    <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select id="status" name="status" required>
                        <option value="">Select Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="pending">Pending</option>
                    </select>
                    </div>

                    <div className="form-group form-group-full">
                    <label htmlFor="bio">Bio (Optional)</label>
                    <textarea id="bio" name="bio" rows="3"></textarea>
                    </div>

                </div>

                <div className="form-actions">
                    <button type="button" className="btn-secondary">Cancel</button>
                    <button type="submit" className="btn-primary">
                    <i className="fas fa-plus"></i> Create User
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </>

  );
};

export default CreateBetForm;
