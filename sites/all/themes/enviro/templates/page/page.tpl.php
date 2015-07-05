<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see html.tpl.php
 */
?>
<header id="header" class="header" role="header">
  <div class="clearfix">
    <nav class="" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="nav clearfix">
        <?php if ($is_front): ?>
        <a href="<?php print $front_page; ?>" id="logo" class="navbar-brand clearfix">
          <img  class="img-responsive" src="/sites/all/themes/enviro/assets/images/care-logo-front.png" alt="<?php print $site_name; ?>">
        </a>
        <h2 class="splash">for this one beautiful world of ours</h2>
      <?php else: ?>
        <a href="<?php print $front_page; ?>" id="logo" class="navbar-brand clearfix">
          <img  class="img-responsive" src="/sites/all/themes/enviro/assets/images/logo.png" alt="<?php print $site_name; ?>">
        </a>
      <?php endif; ?>


      </div> <!-- /.navbar-header -->

      </nav><!-- /.navbar -->
  </div> <!-- /.container -->
</header>

<?php if ($messages): ?>
  <div id="messages" class="container">
    <?php print $messages; ?>
  </div>
<?php endif; ?>

<div id="main-wrapper">
    <div id="content" class="clearfix">
      <?php print render($page['content']); ?>
    </div>
  </div> <!-- /#main -->
</div> <!-- /#main-wrapper -->

<footer id="footer" class="footer" role="footer">
  <div class="container">
    <div class="copyright"> Powered by <a href="https://www.drupal.org">Drupal</a></div>
    <small class="pull-right to-top"><a href="#"><?php print t('Back to Top'); ?></a></small>
  </div>
</footer>
