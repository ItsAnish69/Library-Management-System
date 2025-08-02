const Controller = require('../services/userServices')



//login user
const loginUser = async(req, res) =>{
    try{
    const {email, password} = req.body;
        //find user with the password field
        const user = await User.findOne({email}).select("+password");
        console.log(user)

        if(!user) return res.status(400).json("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({Message: "Invalid password"});

        //if user is librarian add token input field
        let token;
        if(user.role === "librarian"){
            token = jwt.sign({ userId: user.id, role: user.role},
                process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN}); 
        }

        res.status(201).json({
            message: "Login Successful",
            token,
            user:{
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
        }})
    } catch(err){
        res.status(400).json(err)
    }
}

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check for existing user
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //generate token if user is librarian
    if (role === "librarian") {
        const token = jwt.sign({ email, role }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        res.status(201).json({ message: "Librarian registered successfully", token });
        return;
    }

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

module.exports = {
    loginUser,
    registerUser
};