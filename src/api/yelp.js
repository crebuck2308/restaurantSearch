import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer puHrJ9ENa2wKz11jRollgZfHU_CvMr9-hF4IbhfW90P-mBEEqLrrhwFa4WGoVzvK9LI7FF2EbgUyWg57e4S0P0RC4zW37EWNUxtOlCpMdF5xuKgSlYtqj1KQ6kD0YHYx'
    }
});