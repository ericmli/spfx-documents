/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import * as React from 'react';
import * as Icon from '@fluentui/react-icons';

import { IPnPjsExampleProps } from './IPnPjsExampleProps';
import styles from './PnPjsExample.module.scss'
import axios from 'axios';

interface PropsFolders {
  item: ItemFolder[];
}
interface ItemFolder {
  Name: string;
}
interface ItemFile {
  Name: string;
  LinkingUrl:string;
  Length: string;
}


export default function PnPjsExample(props: IPnPjsExampleProps) {
  const [folders, setFolders] = React.useState<ItemFolder []>([])
  const [files, setFiles] = React.useState<ItemFile []>([])
  const initialFolder = 'Documentos Compartilhados'
  const [links, setLinks] = React.useState(initialFolder)
  const [breadcrump, setBreadcrump] = React.useState([initialFolder])
  
  React.useEffect(() => {
    console.log(links);
    
    async function getFolders() {
      const data = await axios(`${props.site.absoluteUrl}/_api/web/GetFolderByServerRelativeUrl('${links}')/Folders?$select=Name,TimeLastModified,LinkingUrl,StorageMetrics,Properties&$expand=StorageMetrics, Properties/Categoria`).then(res => { return res.data.value})
      setFolders(data)
    }
    getFolders()
    async function getFiles() {
      const data = await axios(`${props.site.absoluteUrl}/_api/web/GetFolderByServerRelativeUrl('${links}')/Files?$select=Name,UniqueId,ViewsLifeTime,TimeLastModified,LinkingUrl,Length,Categoria,ServerRelativeUrl&$expand=File,Properties/Categoria`).then(res => { return res.data.value})
      setFiles(data)
    }
    getFiles()
  },[links])
  
  const Folder = ({item}: PropsFolders) => {
    return(
      <>
      {item.map((elm: ItemFolder, index: number) => {
        return(
          <div key={index} onClick={() => {setLinks(links + `/${elm.Name}`);setBreadcrump([...breadcrump, elm.Name])}} className={styles.files}>
            <Icon.FolderFilled fontSize={26}/>
            <p>{elm.Name}</p>
          </div>
        )
      })}
      </>
    )
  }

  const getFileSize = (size: number): string => {
    if (size === 0) return '0 kB';
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (String((size / Math.pow(1024, i)).toFixed(2)) + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]);
  };
  const Files = ({item}: PropsFolders) => {
    return(
      <>
      {item.map((elm: ItemFile, index: number) => {
        return(
          <div key={index} onClick={() => {window.open(elm.LinkingUrl, '_blank')}} className={styles.files}>
            <Icon.DocumentQueueRegular fontSize={26} />
            <span className={styles.filesBody}>
              <p>{elm.Name}</p>
              <p>{getFileSize(Number(elm.Length))}</p>
            </span>
          </div>
        )
      })}
      </>
    )
  }
  const Breadcrump = () =>{
    const Breadcrump = (remove: string) => {
      const folderPosition = breadcrump.indexOf(remove)
      const folderRemoved = breadcrump.slice(0, folderPosition + 1)
      setBreadcrump(folderRemoved)

      // const verifyLink = folderRemoved[folderRemoved.length - 1]
      const verifyLink = links.replace(new RegExp('\\b' + '/' + remove + '\\b.*', 'i'), '')
      // setLinks(verifyLink !== initialFolder ? verifyLink : '')
      setLinks(verifyLink)
    }
    return(
      <div className={styles.breadcrump}>
        {breadcrump.map((elm: string, index: number) => {
          return (
            <p key={index} onClick={() => Breadcrump(elm)}>{elm} /</p>
          )
        })}
      </div>
    )
  }
  return (
    <section className={styles.container}>
      <Breadcrump />
      <Folder item={folders}/>
      <Files item={files}/>
    </section>
  )
}
