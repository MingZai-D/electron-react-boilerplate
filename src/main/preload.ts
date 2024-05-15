// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'upload-file' | 'save-file' | 'run-exec' | 'message';
export type ReadFileType = {
  success: boolean
  data: string
}

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: ReadFileType[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: ReadFileType[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    sendFilePath(channel:Channels, ...args: unknown[]){
      ipcRenderer.send(channel, ...args);
    },
    sendFileData(channel:Channels, ...args: unknown[]){
      ipcRenderer.send(channel, ...args);
    },
    sendExecCommand(channel: Channels, ...args: unknown[]){
      ipcRenderer.send(channel, ...args);
    }
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
