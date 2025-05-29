import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
        console.log(token)
      try {
        const response = await fetch(`http://localhost:8000/verify-token/${token}`);

        if (!response.ok) {
          throw new Error('Token verification failed');
        }
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/');
      }
    };

    verifyToken();
  }, [navigate]);

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title text-success mb-3">Protected Page</h4>
          <p className="card-text">
            This content is only visible to authenticated users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProtectedPage;
