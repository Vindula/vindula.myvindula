# coding: utf-8
from five import grok
from zope.interface import Interface

from vindula.myvindula.utils import UtilMyvindula

class MacroSingleComment(grok.View, UtilMyvindula):
    grok.context(Interface)
    grok.require('zope2.View')
    grok.name('macro-single-comment')
    
class MyVindulaCommentsMacro(grok.View, UtilMyvindula):
    grok.context(Interface)
    grok.require('zope2.View')
    grok.name('myvindula-comments-macro') 

class MacroInputComments(grok.View, UtilMyvindula):
    grok.context(Interface)
    grok.require('zope2.View')
    grok.name('macro-input-comments')

class MacroInputHowareu(grok.View, UtilMyvindula):
    grok.context(Interface)
    grok.require('zope2.View')
    grok.name('macro-input-howareu')
    
class MacroCommentsMaster(grok.View, UtilMyvindula):
    grok.context(Interface)
    grok.require('zope2.View')
    grok.name('macro-comments-master')    
    
class MacroSingleHowareu(grok.View, UtilMyvindula):
    grok.context(Interface)
    grok.require('zope2.View')
    grok.name('macro-single-howareu')    
    
class MyVindulaLikeMacro(grok.View):
    grok.context(Interface)
    grok.require('zope2.View')
    grok.name('myvindula-like-macro')      
    
class MyVindulaImageView(grok.View, UtilMyvindula):
    grok.context(Interface)
    grok.require('zope2.View')
    grok.name('myvindula-image_view')

class MyVindulaUserPerfil(grok.View):
    grok.context(Interface)
    grok.require('zope2.View')
    grok.name('myvindula-user-perfil')                