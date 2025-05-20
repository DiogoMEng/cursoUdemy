def tag(tag, *args, **kwargs):
    if 'html_class' in kwargs:
        #  substituição de html_class por class
        kwargs['class'] = kwargs.pop('html_class')
    atrs = ' '.join(f'{k}="{v}"' for k, v in kwargs.items())
    inner = ''.join(args)
    return (f'<{tag} {atrs}>{inner}</{tag}>')


if __name__ == '__main__':
    print(
        tag('p',
            tag('span', 'curso de python 3'),
            tag('strong', 'Juracy Filho', id='jf'),
            tag('span', 'e'),
            tag('strong', 'Leonardo Leitão', id='ll'),
            tag('span', '.'),
            html_class='alert')
    )
