import User from "../models/Users";

export const dashboard = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/dashboard", { users, title: "Tablero" });
    } catch (error) {
        console.log(error);
    }
};

export const membership = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/membership", { users, title: "Membresías" });
    } catch (error) {
        console.log(error);
    }
};

export const profile = async (req, res) => {
    try {
        const users = await User.find({ _id: req.user.id }).lean();
        res.render("dashboard/profile", { users, title: "Perfil" });
    } catch (error) {
        console.log(error);
    }
};

export const bs = (req, res) => {
    res.render("dashboard/pay/bs", {layout:'main_next', title: "Pagar con Bolívafres | Básico"});
};

export const profileUpdate = async (req, res) => {
    const { promotion, phone, ws, address, city, country, postalcode, description, } = req.body;
    await User.findByIdAndUpdate(req.params.id, {promotion, phone, ws, address, city, country, postalcode, description});
    req.flash("success_msg", "Se ha actualizado su perfil correctamente.");
    res.redirect("/profile");
}