class PurchaseVerifier {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.socket = null;
      this.eventListeners = {};
      this._initializeSocket();
    }
  
    // Initialize the WebSocket connection
    _initializeSocket() {
      // Open WebSocket connection to the backend
      this.socket = new WebSocket(`wss://yourdomain.com/verify?apiKey=${this.apiKey}`);
  
      // Handle incoming WebSocket messages
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const { action, userId, isValid, message } = data;
  
        // If it's a purchase verification result, resolve the promise or invoke event listeners
        if (action === 'verify') {
          if (this.eventListeners[userId]) {
            this.eventListeners[userId](isValid);
          }
        }
  
        // Handle any other real-time events (e.g., subscription updates)
        if (action === 'purchaseUpdate') {
          console.log(`Real-time update for user ${userId}: ${message}`);
        }
      };
  
      // Handle WebSocket errors
      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
  
      // Handle WebSocket connection closure
      this.socket.onclose = () => {
        console.warn('WebSocket connection closed. Attempting to reconnect...');
        setTimeout(() => this._initializeSocket(), 5000); // Reconnect after 5 seconds
      };
    }
  
    // Method to send a purchase verification request
    verifyPurchase(userId) {
      return new Promise((resolve, reject) => {
        if (this.socket.readyState === WebSocket.OPEN) {
          // Store the resolve function in eventListeners for handling the response
          this.eventListeners[userId] = resolve;
  
          // Send the verification request over the WebSocket
          this.socket.send(JSON.stringify({
            action: 'verify',
            userId: userId
          }));
        } else {
          reject('WebSocket is not connected');
        }
      });
    }
  
    // Real-time subscription for purchase updates (e.g., subscription expired, renewed)
    subscribeToUpdates(userId) {
      if (this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify({
          action: 'subscribe',
          userId: userId
        }));
      } else {
        console.error('WebSocket is not connected, unable to subscribe');
      }
    }
  
    // Method to manually close the WebSocket connection
    closeConnection() {
      if (this.socket) {
        this.socket.close();
      }
    }
  }
  
  // Export the PurchaseVerifier class
  export default PurchaseVerifier;
  