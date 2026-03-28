import jwt from 'jsonwebtoken'

// SỬA: Đổi rep thành req
const authSeller = async (req, res, next) => { 
    const { sellerToken } = req.cookies

    if (!sellerToken) {
        return res.json({ success: false, message: 'Not Seller' })
    }
    try {
        // SỬA: Thêm .verify
        const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET) 
        
        if (tokenDecode.email === process.env.SELLER_EMAIL) {
            // SỬA: Lấy đúng biến email thay vì id, và lưu vào req.sellerEmail
            req.sellerEmail = tokenDecode.email; 
            next(); // Chạy tiếp xuống Controller
        }
        else {
            return res.json({ success: false, message: 'Not Seller' })
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export default authSeller