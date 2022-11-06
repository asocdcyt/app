import User from '../models/Users';

export const renderIndex = (req, res) => {
  res.render("index", {layout:'main_index'});
};
  
export const renderPrivacy = (req, res) => {
  res.render("privacy", {layout:'main_index'});
};
  
export const renderLegal = (req, res) => {
  res.render("legal", {layout:'main_index'});
};

export const renderCookies = (req, res) => {
  res.render("cookies", {layout:'main_index'});
};

export const renderProjects = (req, res) => {
  res.render("projects/allprojects", {layout:'main_index'});
};

export const renderAccountability = (req, res) => {
  res.render("accountability", {layout:'main_index'});
};

export const renderNelly = (req, res) => {
  res.render("nelly-velasquez", {layout:'main_index'});
};

export const renderEvent = (req, res) => {
  res.render("event", {layout:'main_index'});
};

export const renderCurseDesingGraphic = (req, res) => {
  res.render("curses/desing-graphic", {layout:'main_index'});
};

export const renderCurseBranding = (req, res) => {
  res.render("curses/branding", {layout:'main_index'});
};

export const renderCursePhotoshop = (req, res) => {
  res.render("curses/photoshop", {layout:'main_index'});
};

export const renderEventValidate = (req, res) => {
  res.render("validate-event", {layout:'main_index'});
};