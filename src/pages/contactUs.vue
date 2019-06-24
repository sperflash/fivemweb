<template>
  <div>
    <nav-bar></nav-bar>
    <div class="Contact_all">
      <div class="contact_top">
        <div style="width: 100%; height:200px;">
          <div class="top_title">
            我们能帮上什么忙吗？
          </div>
          <div class="top_search">
            <el-autocomplete
            style="margin-left: 250px; width: 600px; "
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入您的问题"
              @select="handleSelect"
            ></el-autocomplete>
            <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
          </div>
        </div>
      </div>
      <div class="question_bar">
        <div style="width: 13%; padding-top: 10px; margin-left: 225px;">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first" @click="show">
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="contact_middle">
        <div class="middle_text">
          <div class="text_top">
            <div style="width:100%; height:80px; display:flex;">
              <div class="title_style">登录以获取个性化的帮助</div>
            </div>
            <div style="width:100%; margin-top:50px; margin-left:10px">
              <el-button type="primary" plain @click="toSignUp()" style="height: 50px; width: 100px; margin-right: 50px;">注册</el-button>
              <el-button type="primary" plain @click="toLogin()" style="height: 50px; width: 100px; margin-right: 50px;">登录</el-button>
            </div>
          </div>
          <div class="middle_tuijian">
            <div style="width:100%;">
              <div class="title_style">为您推荐</div>
              <div class="tuijian_three">
                <el-row>
                  <el-col :span="8">
                    <div class="grid-content purple">
                      关于注册登录
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content purple-light">
                      攻略大讨论
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content purple">
                      如何联系
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="three">
                <div style="background0color: red; width:33.3%; height:200px;" class="three_div">
                  <div>
                    注册时出现问题，无法注册？
                  </div>
                  <div>
                    登录不上，登录时出现错误
                  </div>
                  <div>
                    账号显示已经注册
                  </div>
                </div>
                <div style="background0color: yellow; width:33.3%; height:200px;" class="three_div">
                  <div>
                    登录不上，登录时出现错误
                  </div>
                </div>
                <div style="background0color: red; width:33.3%; height:200px;" class="three_div">
                  <div>
                    账号显示已经注册
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="middle_allItem">
            <div style="width:100%;">
              <div class="title_style">全部主题</div>
              <div class="tuijian_three">
                <el-row>
                  <el-col :span="8">
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 48px; width: 48px; display: block; fill: rgb(96, 182, 181);"><path d="m21 7.51v2.73a.51.51 0 0 1 -.5.51h-9.18a1.88 1.88 0 0 1 0-3.75h9.19a.5.5 0 0 1 .5.51zm-7.83 5.74h-7.78a.5.5 0 0 0 -.5.47 22.46 22.46 0 0 1 -.38 2.68.5.5 0 0 0 .48.6h8.18a1.88 1.88 0 0 0 0-3.75z"></path><path d="m23 5v17.5a.5.5 0 0 1 -.5.5h-17a .5.5 0 0 1 -.5-.5v-1a .5.5 0 0 1 1 0v .5h16v-16.5h-.5a.5.5 0 0 1 0-1h1a .5.5 0 0 1 .5.5zm-6.26 15h-13.44a1.66 1.66 0 0 1 -1.36-.67 1.33 1.33 0 0 1 -.18-1.22 27.09 27.09 0 0 0 1.24-8.73v-6.88a.5.5 0 0 1 .5-.5h3.5v-1a .5.5 0 0 1 1 0v1h7v-1a .5.5 0 0 1 1 0v1h3.5a.5.5 0 0 1 .5.5v6.88c0 4.6-.65 8.03-1.87 9.91a1.63 1.63 0 0 1 -1.39.71zm-13.44-1h13.44a.66.66 0 0 0 .55-.25c.78-1.2 1.71-3.8 1.71-9.37v-6.38h-3v1.5a.5.5 0 0 1 -1 0v-1.5h-7v1.5a.5.5 0 0 1 -1 0v-1.5h-3v6.38a27.86 27.86 0 0 1 -1.3 9.06.33.33 0 0 0 .05.31.67.67 0 0 0 .55.25z" fill="#484848"></path></svg>
                    <div style="width:15px;"></div>
                    <div class="grid-content purple">
                      新手上路
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 48px; width: 48px; display: block; fill: rgb(255, 180, 0);"><path d="m17.61 13.4-2.49-.68c-2.76-.75-.51-2.87-2.88-3.51l-2.88-.78a.9.9 0 0 0 -1.1.62l-1.27 4.54 3.81 1.04c2.37.64.13 2.76 2.88 3.51l2.72.74 3.26.89z"></path><path d="m1.5 22a .52.52 0 0 1 -.13-.02.5.5 0 0 1 -.35-.61l5.21-19.02a.5.5 0 0 1 .61-.35l6.92 1.88a2.02 2.02 0 0 1 1.65 2.06c.08.69.13 1.15 1.23 1.45l5.98 1.63a.5.5 0 0 1 .2.86l-4.55 4.04 1.86 5.78a.5.5 0 0 1 -.61.64l-5.98-1.63a2.29 2.29 0 0 1 -1.96-2.3c-.07-.66-.11-.99-.92-1.21l-3.82-1.04a.5.5 0 1 1 .25-.97h.01l3.82 1.04a2.03 2.03 0 0 1 1.65 2.07c.08.69.13 1.15 1.23 1.45l5.1 1.39-1.67-5.22a.5.5 0 0 1 .14-.53l4.11-3.64-5.09-1.39a2.29 2.29 0 0 1 -1.96-2.3c-.07-.66-.11-.99-.92-1.21l-6.44-1.75-5.08 18.54a.5.5 0 0 1 -.48.37z" fill="#484848"></path></svg>
                    <div style="width:15px;"></div>
                    <div class="grid-content purple-light">
                      您的信息
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 48px; width: 48px; display: block; fill: rgb(96, 182, 181);"><path d="m21 24.0001c0 .276-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1v-12c0-.276.224-.5.5-.5s.5.224.5.5v12h1c.276 0 .5.224.5.5zm-5.4437804-7.485c.82.117 1.39.877 1.273 1.697l-.837 5.858c-.035.247-.246.43-.495.43h-2.5c-.276 0-.5-.224-.5-.5v-1.526h-6.99999996v1.526c0 .276-.224.5-.5.5h-2.5c-.249 0-.46-.183-.495-.43l-.837-5.858c-.117-.82.453-1.58 1.273-1.697.07-.01.141-.015.212-.015h1.847v-2.5c0-1.381 1.119-2.5 2.5-2.5h3.99999996c1.381 0 2.5 1.119 2.5 2.5v4c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-4c0-.828-.671-1.5-1.5-1.5h-3.99999996c-.829 0-1.5.672-1.5 1.5v3 1.5h5.99999996c.276 0 .5.224.5.5s-.224.5-.5.5h-5.99999996v1.974h6.99999996v-.474c0-.276.224-.5.5-.5s.5.224.5.5v2.5h1.566l.776-5.43c.039-.273-.151-.526-.424-.565-.023-.003-.047-.005-.071-.005h-.738c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.738c.071 0 .142.005.212.015zm-11.0591509 6.985v-6h-1.847c-.024 0-.048.002-.07.005-.274.039-.464.292-.425.565l.776 5.43zm18.5029313-13h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.328l-1.2-4h-4.251l-.896 3.138c-.076.265-.353.419-.618.342-.266-.075-.42-.352-.344-.618l1-3.5c.062-.214.258-.362.481-.362h2v-1c0-.276.224-.5.5-.5s.5.224.5.5v1h2c.221 0 .416.145.479.356l1.5 5c.096.321-.144.644-.479.644z" fill="#484848"></path><path d="m11.5 16.2501v.75c0 .553-.448 1-1 1h-3.5c-.552 0-1-.447-1-1v-.75c0-.967.784-1.75 1.75-1.75h2c.966 0 1.75.783 1.75 1.75"></path><path d="m13.9078676 6.0313-1.483.225c-.273.041-.461.296-.419.569.041.272.296.461.569.419l1.483-.225c.273-.041.46-.296.419-.569s-.296-.461-.569-.419zm.657-2.058-1.342-.671c-.247-.123-.547-.023-.67.224-.124.247-.024.548.223.671l1.342.671c.247.123.547.023.671-.224.123-.247.023-.548-.224-.671zm5.549 4.009c-.335-.458-1.53-.224-1.773-.699-.243-.476-.463-1.283-.844-1.283-.382 0-.362.358-.465.731-.104.373-.185.782-.33 1.322-.145.541.166.947.795.947h2.185c.432 0 .766-.561.432-1.018zm-3.746-5.364c.123.247.023.547-.224.671-.247.123-.547.023-.671-.224l-.67-1.342c-.124-.247-.024-.547.223-.671.247-.123.548-.023.671.224z" fill="#ffb400"></path></svg>
                    <div style="width:15px;"></div>
                    <div class="grid-content purple">
                      个性化攻略
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="three">
                <div style="background0color: red; width:33.3%; height:200px;" class="three_div">
                  <div>
                    注册时出现问题，无法注册？
                  </div>
                  <div>
                    登录不上，登录时出现错误
                  </div>
                  <div>
                    账号显示已经注册
                  </div>
                </div>
                <div style="background0color: yellow; width:33.3%; height:200px;" class="three_div">
                  <div>
                    登录不上，登录时出现错误
                  </div>
                </div>
                <div style="background0color: red; width:33.3%; height:200px;" class="three_div">
                  <div>
                    账号显示已经注册
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="middle_allItem">
            <div style="width:100%;">
              <!-- <div class="title_style">全部主题</div> -->
              <div class="tuijian_three">
                <el-row>
                  <el-col :span="8">
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 48px; width: 48px; display: block; fill: rgb(255, 180, 0);"><path d="m22 9.4561v8.544c0 .553-.447 1-1 1h-15.796c-.351 0-.678-.186-.858-.487-.283-.475-.128-1.089.346-1.371l15.039-8.974c.233-.139.498-.212.769-.212.828 0 1.5.672 1.5 1.5"></path><path d="m24 7.4854v11.015c0 1.381-1.119 2.5-2.5 2.5h-15.106c-.276 0-.5-.224-.5-.5 0-.277.224-.5.5-.5h15.106c.828 0 1.5-.672 1.5-1.5v-11.015c0-.828-.672-1.5-1.5-1.5h-11.069c-.679 0-1.328-.275-1.799-.764l-.736-.763c-.284-.293-.673-.458-1.081-.458h-4.315c-.828 0-1.5.672-1.5 1.5v13c0 .828.672 1.5 1.5 1.5h.948c.276 0 .5.223.5.5 0 .276-.224.5-.5.5h-.948c-1.381 0-2.5-1.119-2.5-2.5v-13c0-1.381 1.119-2.5 2.5-2.5h4.315c.679 0 1.329.275 1.8.763l.736.764c.283.293.672.458 1.08.458h11.069c1.381 0 2.5 1.119 2.5 2.5zm-15.5 7.7841c0-.447.043-.66.293-1.161l2.424-4.847c.298-.596.505-.762.937-.762s.639.166.937.762l2.424 4.847c.25.501.293.714.293 1.161 0 .638-.677 1.23-1.231 1.23-.529 0-1.147-.313-1.705-.766.693-.798 1.166-1.738 1.166-2.541 0-1.176-.659-2.231-1.884-2.231s-1.884 1.055-1.884 2.231c0 .803.472 1.743 1.166 2.541-.558.453-1.176.766-1.706.766-.552 0-1.23-.592-1.23-1.23zm2.77-2.077c0-.694.335-1.231.884-1.231s.884.537.884 1.231c0 .545-.362 1.235-.884 1.845-.522-.61-.884-1.3-.884-1.845m.884 3.248c.752.631 1.627 1.059 2.423 1.059 1.078 0 2.231-1.008 2.231-2.23 0-.592-.073-.956-.399-1.608l-2.424-4.847c-.451-.903-.965-1.315-1.831-1.315s-1.381.412-1.832 1.315l-2.424 4.847c-.325.652-.398 1.016-.398 1.608 0 1.222 1.152 2.23 2.23 2.23.796 0 1.671-.428 2.424-1.059" fill="#484848"></path></svg>                    <div style="width:15px;"></div>
                    <div class="grid-content purple">
                      新手上路
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 48px; width: 48px; display: block; fill: rgb(255, 180, 0);"><path d="m11.25 18.96a.82.82 0 0 1 -.44-.13c-1.11-.74-4.74-3.33-4.74-5.93a2.86 2.86 0 0 1 2.63-3.07l.1-.01a3.03 3.03 0 0 1 .33.02 3.31 3.31 0 0 1 1.23.41 4.86 4.86 0 0 1 .89.64 4.82 4.82 0 0 1 .89-.64 3.3 3.3 0 0 1 1.23-.41 2.96 2.96 0 0 1 .33-.02 2.86 2.86 0 0 1 2.73 2.97l-.01.1c0 2.6-3.62 5.19-4.74 5.93a.82.82 0 0 1 -.45.14z"></path><path d="m5.01 9.25-1.78 7.37a.5.5 0 0 1 -.49.38h-1.75a.5.5 0 0 1 0-1h1.36l1.91-7.93h-3.27a.5.5 0 1 1 0-1h3.91a.5.5 0 0 1 .49.62l-.13.52.08-.01a7.1 7.1 0 0 1 3.7.11.5.5 0 0 1 -.45.89 7.05 7.05 0 0 0 -3.11-.01c-.19.03-.35.05-.46.06zm18.48-1.68a.5.5 0 0 0 -.5-.5h-3.91a.5.5 0 0 0 -.49.62l.2.79h-2.42a3.95 3.95 0 0 0 -3.29-.48c-.99.3-2.1 1.12-4.31 2.75l-1.5 1.1c-.41.3-.81.63-.8 1.12a1.18 1.18 0 0 0 .62.9 1.6 1.6 0 0 0 .91.27 2.21 2.21 0 0 0 1.28-.43l1.98-1.24a6.75 6.75 0 0 0 1.99 1.15.5.5 0 0 0 .35-.94 5.41 5.41 0 0 1 -1.91-1.18.5.5 0 0 0 -.63-.08l-2.33 1.47a1.03 1.03 0 0 1 -1.06.16 1.32 1.32 0 0 1 -.13-.1 2.77 2.77 0 0 1 .35-.29l1.5-1.1a17.93 17.93 0 0 1 4-2.6 2.95 2.95 0 0 1 2.57.41.49.49 0 0 0 .36.1c.01 0 .02.01.03.01h2.72l1.71 6.94a.5.5 0 0 0 .49.38h.02l1.57-.05a.5.5 0 0 0 .49-.52.48.48 0 0 0 -.47-.49h-.04l-1.16.04-1.91-7.72h3.27a.5.5 0 0 0 .5-.5zm-4.22 10a1.54 1.54 0 0 1 -1.04.61 1.75 1.75 0 0 1 -.21.01 1.62 1.62 0 0 1 -.44-.07 1.54 1.54 0 0 1 -.29.7 1.64 1.64 0 0 1 -1.17.64 1.95 1.95 0 0 1 -.17.01 1.75 1.75 0 0 1 -.38-.05 1.66 1.66 0 0 1 -.55 1.02 1.79 1.79 0 0 1 -1.16.44 1.53 1.53 0 0 1 -.38-.05 2.56 2.56 0 0 1 -1.6.64 2.16 2.16 0 0 1 -.3-.03v.01a4.35 4.35 0 0 1 -.55.72 1.64 1.64 0 0 1 -1.17.5 1.68 1.68 0 0 1 -.43-.06 1.52 1.52 0 0 1 -1.21-1.3 1.57 1.57 0 0 1 -.36.05 1.4 1.4 0 0 1 -.51-.1 1.55 1.55 0 0 1 -1.08-1.53c-.02 0-.03.01-.05.01a1.39 1.39 0 0 1 -.41-.06 1.56 1.56 0 0 1 -1.16-1.88q.02-.08.04-.15a1.93 1.93 0 0 1 .26-.55l.26-.36c-.02-.01-.04-.04-.06-.05a.99.99 0 0 0 -.61-.06 3.4 3.4 0 0 1 -.28.02.5.5 0 0 1 0-1c .06 0 .12-.01.19-.01a1.88 1.88 0 0 1 1.24.22 6.37 6.37 0 0 1 1.09 1 17.67 17.67 0 0 0 4.27 3.37l.04.02a1.47 1.47 0 0 0 1.93-.33.48.48 0 0 1 .23-.12.49.49 0 0 1 .15-.02.49.49 0 0 1 .23.05.71.71 0 0 0 .72-.15.84.84 0 0 0 .17-.97.5.5 0 0 1 .86-.48c.01.01.01.01.02.01a.78.78 0 0 0 .61.22.66.66 0 0 0 .46-.23.65.65 0 0 0 -.13-.88l-.28-.21a.5.5 0 0 1 .43-.88.49.49 0 0 1 .19.09l.25.19c.02.01.03.03.05.05l.61.46a.68.68 0 0 0 .5.15.54.54 0 0 0 .37-.21.67.67 0 0 0 -.09-.92l-2.31-1.87a.5.5 0 0 1 .63-.78l2.3 1.86a1.66 1.66 0 0 1 .27 2.29zm-12.46.91.08-.11a25.51 25.51 0 0 1 -.82-.83l-.11-.11-.18.25a.92.92 0 0 0 -.11.25.57.57 0 0 0 .45.8.73.73 0 0 0 .68-.25zm1.62 1.66.21-.24.03-.05c-.38-.28-.72-.55-1.02-.8l-.18.22a.93.93 0 0 0 -.13.24.57.57 0 0 0 .39.83.75.75 0 0 0 .7-.2zm1.9 1.33a3.01 3.01 0 0 0 .28-.35q-.6-.35-1.11-.69l-.07.08-.07.1a.94.94 0 0 0 -.11.25.56.56 0 0 0 .45.79.62.62 0 0 0 .63-.18z" fill="#484848"></path></svg>
                    <div style="width:15px;"></div>
                    <div class="grid-content purple-light">
                      您的信息
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 48px; width: 48px; display: block; fill: rgb(255, 180, 0);"><path d="m21.31 5.91a1.31 1.31 0 1 1 -1.31-1.31 1.31 1.31 0 0 1 1.31 1.31zm-8.31 9.69a1.31 1.31 0 1 0 1.31 1.31 1.31 1.31 0 0 0 -1.31-1.31zm-7-11a1.31 1.31 0 1 0 1.31 1.31 1.31 1.31 0 0 0 -1.31-1.31z"></path><path d="m22 6.5a2.5 2.5 0 0 1 -2 2.45v13.55a.5.5 0 0 1 -1 0v-13.55a2.5 2.5 0 0 1 0-4.9v-2.55a.5.5 0 0 1 1 0v2.56a2.44 2.44 0 0 1 .33.09.5.5 0 0 1 -.33.94h-.01a1.45 1.45 0 0 0 -.99.01 1.49 1.49 0 0 0 0 2.82 1.4 1.4 0 0 0 1 0 1.5 1.5 0 0 0 1-1.41 1.48 1.48 0 0 0 -.09-.52.5.5 0 0 1 .94-.35 2.5 2.5 0 0 1 .16.87zm-7.8 9.83a.5.5 0 0 0 -.29.64 1.48 1.48 0 0 1 .09.52 1.5 1.5 0 0 1 -1 1.41 1.4 1.4 0 0 1 -1 0 1.49 1.49 0 0 1 0-2.82 1.48 1.48 0 0 1 .5-.09 1.52 1.52 0 0 1 .5.08h.01a.5.5 0 0 0 .32-.94 2.46 2.46 0 0 0 -.32-.08v-13.56a.5.5 0 0 0 -1 0v13.55a2.5 2.5 0 0 0 0 4.9v2.55a.5.5 0 0 0 1 0v-2.55a2.5 2.5 0 0 0 1.84-3.32.5.5 0 0 0 -.64-.29zm-7-11a .5.5 0 0 0 -.29.64 1.48 1.48 0 1 1 -1.41-.98 1.47 1.47 0 0 1 .49.08h.01a.5.5 0 0 0 .33-.94 2.44 2.44 0 0 0 -.33-.09v-2.56a.5.5 0 0 0 -1 0v2.55a2.5 2.5 0 0 0 0 4.9v13.55a.5.5 0 0 0 1 0v-13.55a2.5 2.5 0 0 0 1.84-3.32.5.5 0 0 0 -.64-.29z" fill="#484848"></path></svg>
                    <div style="width:15px;"></div>
                    <div class="grid-content purple">
                      个性化攻略
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="three">
                <div style="background0color: red; width:33.3%; height:200px;" class="three_div">
                  <div>
                    注册时出现问题，无法注册？
                  </div>
                  <div>
                    登录不上，登录时出现错误
                  </div>
                  <div>
                    账号显示已经注册
                  </div>
                </div>
                <div style="background0color: yellow; width:33.3%; height:200px;" class="three_div">
                  <div>
                    登录不上，登录时出现错误
                  </div>
                </div>
                <div style="background0color: red; width:33.3%; height:200px;" class="three_div">
                  <div>
                    账号显示已经注册
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottomAnother></bottomAnother>
  </div>
</template>


<script>
import navBar from "@/components/navBar";
import bottomAnother from "@/components/bottomAnother";
import { signUpApi, getThoughts } from "@/api/SignUp.js";

export default {
  components: {
    navBar,
    bottomAnother
  },
  // name: "HelloWorld",
  data() {
    return {
      restaurants: [],
      state: "",
      timeout: null,
      activeName: "first",
      userName: "www",
      phoneNumber: "15650582160",
      password: "ai1522573",
      userId: 1,
    };
  },
  methods: {
    getThought() {
      console.log("jjjj");
      getThoughts(this.userId).then(res => {
        console.log("jjjjxdzgDFjj");
        console.log(res);
      });
    },
    postSignUp() {
      console.log("jjjj");
      signUpApi(this.userName, this.phoneNumber, this.password).then(res => {
        console.log("jjjjxdzgDFjj");
        console.log(res);
      });
    },
    toSignUp() {
      this.$router.push("SignUp");
    },
    toLogin() {
      this.$router.push("Login");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    loadAll() {
      return [
        { value: "注册出现问题", address: "长宁区新渔路144号" },
        {
          value: "操作出现问题，如何联系客服？",
          address: "上海市长宁区淞虹路661号"
        }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    reloadPage() {
      location = location;
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  created() {
    this.getThought();
    this.postSignUp();
    this.reloadPage();
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  display: flex;
}
.bg-purple-dark {
  // background: #99a9bf;
  // width: 100%;
  font-size: 22px;
  font-family: "微软雅黑";
  color: rgb(72, 72, 72);
  font-weight: 800;
}
.purple {
  // background: #d3dce6;
  // width: 100%;
  font-size: 22px;
  font-family: "微软雅黑";
  color: rgb(72, 72, 72);
  font-weight: 800;
}
.purple-light {
  // background: #e5e9f2;
  // width: 100%;
  font-size: 22px;
  font-family: "微软雅黑";
  color: rgb(72, 72, 72);
  font-weight: 800;
}
.grid-content {
  border-radius: 4px;
  min-height: 30px;
  height: 30px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.contact_top {
  background-color: #2a6aa1;
  height: 330px;
  display: flex;
  .top_title {
    height: 80px;
    width: 40%;
    margin-top: 120px;
    margin-left: 250px;
    font-family: "微软雅黑";
    color: white;
    font-size: 40px;
    font-weight: 600;
  }
  .top_search {
    height: 80px;
    width: 100%;
    margin-top: 20px;
  }
}
.question_bar {
  height: 80px;
  width: 100%;
  box-shadow: 3px 3px 3px 3px rgb(236, 236, 236);
}
.el-tabs__item {
  font-size: 18px;
  padding: 0px 25px;
  height: 53px;
}
.contact_middle {
  // background-color: red;
  height: 1250px;
  width: 100%;
  display: flex;
  justify-content: center;
  .middle_text {
    height: 600px;
    // background-color: yellow;
    width: 70%;
    .text_top {
      width: 100%;
      // background-color: aqua;
      border-bottom: rgb(240, 236, 236) 1px solid;
      height: 220px;
      .title_style {
        width: 100%;
        margin-top: 50px;
        margin-left: 10px;
        font-size: 32px;
        font-family: "微软雅黑";
        color: rgb(72, 72, 72);
        font-weight: 800;
      }
    }
    .middle_tuijian {
      // background-color: aqua;
      height: 300px;
      width: 100%;

      .title_style {
        width: 100%;
        margin-top: 50px;
        margin-left: 10px;
        font-size: 32px;
        font-family: "微软雅黑";
        color: rgb(72, 72, 72);
        font-weight: 800;
      }
      .tuijian_three {
        padding-top: 50px;
        height: 60px;
        width: 100%;
        // background-color: yellow;
      }
      .three {
        height: 300px;
        // background-color: red;
        display: flex;
        .three_div {
          font-size: 16px !important;
          font-weight: 400 !important;
          line-height: 2.375em !important;
          color: rgb(72, 72, 72) !important;
        }
      }
    }
    .middle_allItem {
      // background-color: aqua;
      height: 300px;
      width: 100%;

      .title_style {
        width: 100%;
        margin-top: 50px;
        margin-left: 10px;
        font-size: 32px;
        font-family: "微软雅黑";
        color: rgb(72, 72, 72);
        font-weight: 800;
      }
      .tuijian_three {
        padding-top: 50px;
        height: 60px;
        width: 100%;
        // background-color: yellow;
      }
      .three {
        height: 300px;
        // background-color: red;
        display: flex;
        .three_div {
          font-size: 16px !important;
          font-weight: 400 !important;
          line-height: 2.375em !important;
          color: rgb(72, 72, 72) !important;
        }
      }
    }
  }
}
</style>
