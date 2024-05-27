# Dashboard Project

Welcome to the Dashboard project! This project is built using React and integrates with Auth0 for authentication. It displays market summaries, lists, and graphs using data from various APIs.
![Dashboard Preview](assets/img1.png)
![Dashboard Preview](assets/img2.png)
![profile Preview](assets/img1.png)
## Key Features

- **Stock Price Display:** View the latest stock prices for various companies.
- **Sector Performance Data:** Analyze the performance of different market sectors.
- **Top Market Companies:** See the top gainers, losers, and most actively traded companies.
- **Graphical Representation:** Visualize data through interactive graphs.
- **Authentication:** Secure login and user management using Auth0.

## Getting Started

To clone and run this project on your local machine, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/your-repo-name.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-repo-name
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Run the app:**

    ```bash
    npm run dev
    ```

5. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## Challenges

During the development of this project, we encountered several challenges:

- **Finding the Correct API:** One of the major challenges was finding an API that provided the necessary data for stock prices, sector performance, and top market companies. We needed an API that could meet our requirements and was reliable.

- **API Rate Limits:** We had to ensure the chosen API allowed a sufficient number of requests per day. We selected an API that provided up to 25 API requests per day, which required efficient handling and caching of data to avoid exceeding the limit.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to open issues or submit pull requests. If you encounter any problems or have any questions, please reach out to us.

Happy coding! 🚀

