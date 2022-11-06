import User from '../models/Users';
import Curse from '../models/Curse';
import Request from '../models/Request';
import Graduates from '../models/Graduates';
import passport from "passport";
import random from 'string-random';

export const renderSignUpForm = (req, res) => res.render("signup", {layout:'main_index'});

export const jornade = async (req, res) => {
  let errors = [];
  const uuid = random(6);
  const { 
    fullname,
      email,
      ws,
      phone,
      idcard,
      typeparticipant,
      ponencia1,
      ponencia2,
      ponencia3,
      ponencia4,
      ponencia5,
      ponencia6,
      ponencia7,
      fulltime,
      bankref,
      amountref,
      reference, } = req.body;

  if (errors.length > 0) {
    return res.render("signup", {
      errors,
      fullname,
      email,
      ws,
      phone,
      idcard,
      typeparticipant,
      ponencia1,
      ponencia2,
      ponencia3,
      ponencia4,
      ponencia5,
      ponencia6,
      ponencia7,
      fulltime,
      bankref,
      amountref,
      reference,
    });
  } else {
    // Look for email coincidence
    const emailUser = await Request.findOne({ email: email });
    const idcardUser = await Request.findOne({ idcard: idcard });
    if (emailUser) {
      req.flash("error_msg", "El correo electrónico ya tiene una solicitud abierta.");
      return res.redirect("/event");
    } else if (idcardUser){
      req.flash("error_msg", "El número de cédula de identidad ya tiene una solicitud abierta.");
      return res.redirect("/event");
    } else {
      // Saving a New User
      const newRequest = new Request({ 
      fullname,
      email,
      ws,
      phone,
      idcard,
      typeparticipant,
      ponencia1,
      ponencia2,
      ponencia3,
      ponencia4,
      ponencia5,
      ponencia6,
      ponencia7,
      fulltime,
      bankref,
      amountref,
      reference, uuid });
      await newRequest.save()
      req.flash("success_msg", "Inscripción enviada exitosamente, síguenos en nuestras redes sociales: @asocdcyt");
      return res.redirect("/event");
    }
  }
};

export const curse = async (req, res) => {
  let errors = [];
  const uuid = random(6);
  const { 
    fullname,
      email,
      ws,
      phone,
      idcard,
      curse,
      semana1,
      semana2,
      semana3,
      semana4,
      semana5,
      semana6,
      fulltime,
      bankref,
      amountref,
      reference, } = req.body;

  if (errors.length > 0) {
    return res.render("signup", {
      errors,
      fullname,
      email,
      ws,
      phone,
      idcard,
      curse,
      semana1,
      semana2,
      semana3,
      semana4,
      semana5,
      semana6,
      fulltime,
      bankref,
      amountref,
      reference,
    });
  } else {
      // Saving a New User
      const newCurse = new Curse({ 
      fullname,
      email,
      ws,
      phone,
      idcard,
      curse,
      semana1,
      semana2,
      semana3,
      semana4,
      semana5,
      semana6,
      fulltime,
      bankref,
      amountref,
      reference, uuid });
      await newCurse.save()
      req.flash("success_msg", "Inscripción enviada exitosamente, síguenos en nuestras redes sociales: @asocdcyt");
      return res.redirect("/#news");
  }
};

export const eventValidate = async (req, res) => {

  let errors = [];
  let success_msg = [];
  const { email } = req.body;
  const emailRequest = await Request.findOne({ email: email });

  if (emailRequest) {
    success_msg.push({ text: "Solicitud de inscripción encontrada con éxito." });
    const emails = await Request.find({ email: email }).lean();
    res.render("validate-event", { emails, layout:'main_index', title: "Verificación de Inscripción" } );
    } else {
      errors.push({ text: "Solicitud de inscripción no encontrada." });
      res.render("validate-event", {
      errors,
      email,
    });
    }
};

export const validate = async (req, res) => {

  let errors = [];
  let success_msg = [];
  const { idcard } = req.body;
  const idcardgraduated = await Graduates.find({ idcard: idcard });

  if (idcardgraduated) {
    success_msg.push({ text: "Egresado encontrado con éxito." });
    const graduates = await Graduates.find({ idcard: idcard }).lean();
    res.render("signup", { graduates, title: "Crear Cuenta" } );
    } else {
      errors.push({ text: "Egresado no encontrado." });
      res.render("signup", {
      errors,
      idcard,
    });
    }
};

export const signupPOST = async (req, res) => {
    let errors = [];
    const uuid = random(6);
    const { 
      idcard,
      name,
      lastname,
      collegedegree,
      lastyear,
      promotion,
      email,
      password,
      confirm_password } = req.body;
    if (password != confirm_password) {
      errors.push({ text: "Las contraseñas no coinciden." });
    }
    if (password.length < 6) {
      errors.push({ text: "Las contraseñas deben tener al menos 6 caracteres." });
    }
    if (errors.length > 0) {
      res.render("signup", {
        errors,
        idcard,
        name,
        lastname,
        collegedegree,
        lastyear,
        promotion,
        email,
        password,
        confirm_password
      });
    } else {
      // Look for email coincidence
      const emailUser = await User.find({ email: email });
      const idcardUser = await User.find({ idcard: idcard });
      if (emailUser) {
        req.flash("error_msg", "El correo electrónico ya está en uso.");
        res.redirect("/signup");
      } else if (idcardUser) {
        req.flash("error_msg", "Egresado ya registrado.");
        res.redirect("/signup");
      } else {
        // Saving a New User
        const newUser = new User({ idcard,
          name,
          lastname,
          collegedegree,
          lastyear,
          promotion,
          email,
          password, uuid });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save()
        req.flash("success_msg", "Inicie sesión para continuar");
        res.redirect("/login");
      }
    }
  };

export const renderSigninForm = (req, res) => res.render("login", {layout:'main_index'});

export const signinPOST = passport.authenticate('local', {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
  failureFlash: true,
});

export const logout = (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash("success_msg", "Se ha cerrado su sesión.");
    res.redirect('/login');
  });
};
