from pacote_1.modulo1 import soma
from pacote_2.modulo1 import subtracao as sub

# define a lista dos nomes de submódulos que serão importados quando a
# operação usar *
__all__ = ['soma', 'sub']
