import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  schematic,
} from '@angular-devkit/schematics';
import { Schema as FeatureOptions } from './schema';

export default function(options: FeatureOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    return chain([
      schematic('action', {
        flat: options.flat,
        group: options.group,
        name: options.name,
        path: options.path,
        project: options.project,
        skipTest: true,
        api: options.api,
        creators: options.creators,
      }),
      schematic('reducer', {
        flat: options.flat,
        group: options.group,
        module: options.module,
        name: options.name,
        path: options.path,
        project: options.project,
        skipTest: options.skipTest,
        reducers: options.reducers,
        feature: true,
        api: options.api,
        creators: options.creators,
      }),
      schematic('effect', {
        flat: options.flat,
        group: options.group,
        module: options.module,
        name: options.name,
        path: options.path,
        project: options.project,
        skipTest: options.skipTest,
        feature: true,
        api: options.api,
        creators: options.creators,
      }),
      schematic('selector', {
        flat: options.flat,
        group: options.group,
        name: options.name,
        path: options.path,
        project: options.project,
        skipTest: options.skipTest,
        feature: true,
      }),
    ])(host, context);
  };
}
