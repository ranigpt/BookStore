const User = require('../model/user.model');
const bcryptjs = require('bcryptjs');

const signup = async (req, res) => {
    try {
        const { fullname, email, password, dob } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashpassword = await bcryptjs.hash(password, 10);

        // Create new user
        const newUser = new User({
            fullname,
            email,
            password: hashpassword,
            dob
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully',user:{
            _id:newUser._id,
            fullname:newUser.fullname,
            email:newUser.email,

        }, });

    } catch (error) {
        console.log('error: ' + error.message);
        res.status(500).json({ message: "Internal error occurred", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials...!!" });
        }

        const isMatched = await bcryptjs.compare(password, user.password);

        if (!isMatched) {
            return res.status(400).json({ message: "Invalid credentials...!!" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (error) {
        console.log("error in login", error);
        res.status(500).json({ message: "Internal error occurred", error: error.message });
    }
};

// Export both signup and login functions
module.exports = { signup, login };
