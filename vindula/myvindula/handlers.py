 #-*- coding: utf-8 -*-
from zope.app.component.hooks import getSite
from Products.CMFCore.interfaces import ISiteRoot
#from zExceptions import Redirect

from vindula.myvindula.user import ModelsFuncDetails

def to_utf8(value):
    return unicode(value, 'utf-8') 


def userupdate(event):
    """ Handler for User Login in Site """
    membership = getSite().portal_membership
    user_login = membership.getAuthenticatedMember()
    registro_url = getSite().absolute_url() + '/myvindula-first-registre'
    enable = getSite().restrictedTraverse('@@myvindula-conf-userpanel').check_alert_first_access()
    request = getSite().REQUEST        
        
    try:
        user_id = to_utf8(user_login.getUserName())
    except:
        user_id = user_login.getUserName()
        
    if not ModelsFuncDetails().get_FuncDetails(user_id):
        D = {}
        D['username'] = user_id
        
        if user_login.getProperty('fullname'):
            user = user_login.getProperty('fullname')
        else:
            user = user_id
        
        try:
            D['name'] = to_utf8(user)
        except:
            D['name'] = user
        
        try:
            D['email'] = to_utf8(user_login.getProperty('email'))
        except:
            D['email'] = user_login.getProperty('email')
        
        ModelsFuncDetails().set_FuncDetails(**D)
        
            
        request.other["came_from"]=registro_url
        request.response.redirect(registro_url, lock=True)
        
    else:
        user_data = ModelsFuncDetails().get_FuncDetails(user_id)
        
        if ((not user_data.name) or (not user_data.date_birth) or\
            (not user_data.phone_number) or (not user_data.email)) and enable:
            
            request.other["came_from"]=registro_url
            request.response.redirect(registro_url, lock=True)
            
