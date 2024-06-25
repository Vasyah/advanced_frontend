import React from 'react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme:Theme) => Story => <div className={`app ${theme}`} style={{ minWidth: '100%' }}><Story /></div>
