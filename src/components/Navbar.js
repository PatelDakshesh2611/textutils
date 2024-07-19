import React from 'react'

export default function knowledgeofprops(props) {
  return (
    <>
       <nav class={`navbar bg-${props.modes}`} data-bs-theme={`${props.modes}`}>
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <form class="d-flex" role="search">
    
      
    </form>
    <div class={`form-check form-switch text-${props.button}`}>
  <input onClick={props.togglemode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable darkmode</label>
</div>
  </div>
</nav>
    </>
  )
}
