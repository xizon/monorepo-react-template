import { MyPlugin1 } from './Component';
import { MyPluginComponent } from 'plugin-component';

// load plugin component from monorepo
document.body.appendChild(MyPluginComponent());

//
document.body.appendChild(MyPlugin1());

