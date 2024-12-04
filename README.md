# Grass Airdrop Bot
   - Bot for Grass Airdrop Season 2.

# Register Grass 
- https://app.getgrass.io/register/?referralCode=0oZ5gx00FywA8zg


# Requirements
- Nodejs :v22.11.0
- XAMPP
- Python3


# Installation

1. Clone this repository 

   ```bash
   git clone https://github.com/GangsterGpc/GrassBot-Js.git
   ```

2. Navigate the directory:

   ```bash
   cd GrassBot-Js
   ```

3. Install the requirements:

   ```bash
   npm install
   ```

4. Put your userID to file named `uid.txt`

   - Open [https://app.getgrass.io/dashboard](https://app.getgrass.io/register/?referralCode=MCjlW11j0OF4zbo).
   - Open browser's `developer tools` and click select `Inspect` .
   - Go to the `Console` tab.
   - Paste the following command :

     ```javascript
     localStorage.getItem('userId');
     ```

   - Copy userid.
   - Paste in `uid.txt`


5. Put your proxies list to file named `proxy.txt`

   - Proxy format :

      ```text
      http://username:password@hostname:port
      ```

# Operation Usage

   1. To run the `Grass-AD-Bot`, copy the following command and paste in your terminal:

      ```bash
      npm start
      ```
   2. Select Proxy and choose `Custom` by using arrow key and press enter.
   3. Enter your proxies file named of `proxy.txt`.
   4. Open https://app.getgrass.io/dashboard and click refresh.

