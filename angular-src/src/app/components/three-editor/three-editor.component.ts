import {
  Component,
  AfterViewInit,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-three-editor',
  templateUrl: './three-editor.component.html',
  styleUrls: ['./three-editor.component.scss']
})
export class ThreeEditorComponent implements AfterViewInit, OnInit {

  public loadLink(linkUrl: string) {
    return new Promise((resolve, reject) => {
      const linkElement = document.createElement('link');
      linkElement.type = 'text/css';
      linkElement.rel = 'stylesheet';
      linkElement.href = linkUrl;
      linkElement.onload = resolve;
      document.body.appendChild(linkElement);
    });
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.type = 'application/javascript';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  constructor() {}

  ngOnInit() {
    this.loadLink('../../assets/editor/css/main.css');
    this.loadLink('../../assets/editor/css/dark.css');
    this.loadLink('../../assets/editor/js/libs/codemirror/codemirror.css');
    this.loadLink('../../assets/editor/js/libs/codemirror/addon/dialog.css');
    this.loadLink('../../assets/editor/js/libs/codemirror/show-hint.css');
    this.loadLink('../../assets/editor/js/libs/codemirror/tern.css');
    this.loadLink('../../assets/editor/js/libs/codemirror/theme/monokai.css');
  }

  async ngAfterViewInit() {

    await this.loadScript('../../assets/build/three.js');
    await this.loadScript('../../assets/examples/js/libs/system.min.js');

    await this.loadScript('../../assets/examples/js/controls/EditorControls.js');
    await this.loadScript('../../assets/examples/js/controls/TransformControls.js');

    await this.loadScript('../../assets/examples/js/libs/jszip.min.js');
    await this.loadScript('../../assets/examples/js/libs/inflate.min.js');

    await this.loadScript('../../assets/examples/js/loaders/AMFLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/AWDLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/BabylonLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/ColladaLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/FBXLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/GLTFLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/KMZLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/MD2Loader.js');
    await this.loadScript('../../assets/examples/js/loaders/OBJLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/MTLLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/PlayCanvasLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/PLYLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/STLLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/TGALoader.js');
    await this.loadScript('../../assets/examples/js/loaders/TDSLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/UTF8Loader.js');
    await this.loadScript('../../assets/examples/js/loaders/VRMLLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/VTKLoader.js');
    await this.loadScript('../../assets/examples/js/loaders/ctm/lzma.js');
    await this.loadScript('../../assets/examples/js/loaders/ctm/ctm.js');
    await this.loadScript('../../assets/examples/js/loaders/ctm/CTMLoader.js');
    await this.loadScript('../../assets/examples/js/exporters/OBJExporter.js');
    await this.loadScript('../../assets/examples/js/exporters/GLTFExporter.js');
    await this.loadScript('../../assets/examples/js/exporters/STLExporter.js');

    await this.loadScript('../../assets/examples/js/renderers/Projector.js');
    await this.loadScript('../../assets/examples/js/renderers/CanvasRenderer.js');
    await this.loadScript('../../assets/examples/js/renderers/RaytracingRenderer.js');
    await this.loadScript('../../assets/examples/js/renderers/SoftwareRenderer.js');
    await this.loadScript('../../assets/examples/js/renderers/SVGRenderer.js');

    await this.loadScript('../../assets/js/libs/codemirror/codemirror.js');
    await this.loadScript('../../assets/js/libs/codemirror/mode/javascript.js');
    await this.loadScript('../../assets/js/libs/codemirror/mode/glsl.js');

    await this.loadScript('../../assets/js/libs/esprima.js');
    await this.loadScript('../../assets/js/libs/jsonlint.js');
    await this.loadScript('../../assets/js/libs/glslprep.min.js');

    await this.loadScript('../../assets/js/libs/codemirror/addon/dialog.js');
    await this.loadScript('../../assets/js/libs/codemirror/addon/show-hint.js');
    await this.loadScript('../../assets/js/libs/codemirror/addon/tern.js');
    await this.loadScript('../../assets/js/libs/acorn/acorn.js');
    await this.loadScript('../../assets/js/libs/acorn/acorn_loose.js');
    await this.loadScript('../../assets/js/libs/acorn/walk.js');
    await this.loadScript('../../assets/js/libs/ternjs/polyfill.js');
    await this.loadScript('../../assets/js/libs/ternjs/signal.js');
    await this.loadScript('../../assets/js/libs/ternjs/tern.js');
    await this.loadScript('../../assets/js/libs/ternjs/def.js');
    await this.loadScript('../../assets/js/libs/ternjs/comment.js');
    await this.loadScript('../../assets/js/libs/ternjs/infer.js');
    await this.loadScript('../../assets/js/libs/ternjs/doc_comment.js');
    await this.loadScript('../../assets/js/libs/tern-threejs/threejs.js');

    await this.loadScript('../../assets/js/libs/signals.min.js');
    await this.loadScript('../../assets/js/libs/ui.js');
    await this.loadScript('../../assets/js/libs/ui.three.js');

    await this.loadScript('../../assets/js/libs/app.js');
    await this.loadScript('../../assets/js/Player.js');
    await this.loadScript('../../assets/js/Script.js');

    await this.loadScript('../../assets/examples/js/vr/WebVR.js');

    await this.loadScript('../../assets/js/Storage.js');

    await this.loadScript('../../assets/js/Editor.js');
    await this.loadScript('../../assets/js/Config.js');
    await this.loadScript('../../assets/js/History.js');
    await this.loadScript('../../assets/js/Loader.js');
    await this.loadScript('../../assets/js/Menubar.js');
    await this.loadScript('../../assets/js/Menubar.File.js');
    await this.loadScript('../../assets/js/Menubar.Edit.js');
    await this.loadScript('../../assets/js/Menubar.Add.js');
    await this.loadScript('../../assets/js/Menubar.Play.js');
    await this.loadScript('../../assets/js/Menubar.View.js');
    await this.loadScript('../../assets/js/Menubar.Examples.js');
    await this.loadScript('../../assets/js/Menubar.Help.js');
    await this.loadScript('../../assets/js/Menubar.Status.js');
    await this.loadScript('../../assets/js/Sidebar.js');
    await this.loadScript('../../assets/js/Sidebar.Scene.js');
    await this.loadScript('../../assets/js/Sidebar.Project.js');
    await this.loadScript('../../assets/js/Sidebar.Settings.js');
    await this.loadScript('../../assets/js/Sidebar.Settings.Shortcuts.js');
    await this.loadScript('../../assets/js/Sidebar.Properties.js');
    await this.loadScript('../../assets/js/Sidebar.Object.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.Geometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.BufferGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.Modifiers.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.BoxGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.CircleGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.CylinderGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.IcosahedronGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.PlaneGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.SphereGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.TorusGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.TorusKnotGeometry.js');
    await this.loadScript('../../assets/examples/js/geometries/TeapotBufferGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.TeapotBufferGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Geometry.LatheGeometry.js');
    await this.loadScript('../../assets/js/Sidebar.Material.js');
    await this.loadScript('../../assets/js/Sidebar.Animation.js');
    await this.loadScript('../../assets/js/Sidebar.Script.js');
    await this.loadScript('../../assets/js/Sidebar.History.js');
    await this.loadScript('../../assets/js/Toolbar.js');
    await this.loadScript('../../assets/js/Viewport.js');
    await this.loadScript('../../assets/js/Viewport.Info.js');

    await this.loadScript('../../assets/js/Command.js');
    await this.loadScript('../../assets/js/commands/AddObjectCommand.js');
    await this.loadScript('../../assets/js/commands/RemoveObjectCommand.js');
    await this.loadScript('../../assets/js/commands/MoveObjectCommand.js');
    await this.loadScript('../../assets/js/commands/SetPositionCommand.js');
    await this.loadScript('../../assets/js/commands/SetRotationCommand.js');
    await this.loadScript('../../assets/js/commands/SetScaleCommand.js');
    await this.loadScript('../../assets/js/commands/SetValueCommand.js');
    await this.loadScript('../../assets/js/commands/SetUuidCommand.js');
    await this.loadScript('../../assets/js/commands/SetColorCommand.js');
    await this.loadScript('../../assets/js/commands/SetGeometryCommand.js');
    await this.loadScript('../../assets/js/commands/SetGeometryValueCommand.js');
    await this.loadScript('../../assets/js/commands/MultiCmdsCommand.js');
    await this.loadScript('../../assets/js/commands/AddScriptCommand.js');
    await this.loadScript('../../assets/js/commands/RemoveScriptCommand.js');
    await this.loadScript('../../assets/js/commands/SetScriptValueCommand.js');
    await this.loadScript('../../assets/js/commands/SetMaterialCommand.js');
    await this.loadScript('../../assets/js/commands/SetMaterialValueCommand.js');
    await this.loadScript('../../assets/js/commands/SetMaterialColorCommand.js');
    await this.loadScript('../../assets/js/commands/SetMaterialMapCommand.js');
    await this.loadScript('../../assets/js/commands/SetSceneCommand.js');

    await this.loadScript('../../assets/js/libs/html2canvas.js');
    await this.loadScript('../../assets/js/libs/three.html.js');
    await this.loadScript('../../assets/js/myEditor.js');

  }

}
