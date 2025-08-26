$(document).ready(function () {

    // Tab Navigation Functionality
    $('.tab-button').on('click', function (e) {
        e.preventDefault();

        const targetTab = $(this).data('tab');

        // Remove active class from all tab buttons
        $('.tab-button').removeClass('active');

        // Add active class to clicked tab button
        $(this).addClass('active');

        // Hide all tab content
        $('.tab-content').removeClass('active');

        // Show target tab content
        $('#' + targetTab + '-content').addClass('active');

        // Update sidebar navigation
        $('.sidebar-nav .nav-item').removeClass('active');
        $(`.sidebar-nav .nav-item[data-tab="${targetTab}"]`).addClass('active');

        // Load content for the tab
        loadTabContent(targetTab);
    });

    // Sidebar Navigation Functionality
    $('.sidebar-nav .nav-item').on('click', function (e) {
        e.preventDefault();

        const targetTab = $(this).data('tab');

        if (targetTab) {
            // Remove active class from all sidebar items
            $('.sidebar-nav .nav-item').removeClass('active');

            // Add active class to clicked item
            $(this).addClass('active');

            // Update main tab navigation
            $('.tab-button').removeClass('active');
            $(`.tab-button[data-tab="${targetTab}"]`).addClass('active');

            // Hide all tab content
            $('.tab-content').removeClass('active');

            // Show target tab content
            $('#' + targetTab + '-content').addClass('active');

            // Load content for the tab
            loadTabContent(targetTab);
        }
    });

    // Function to load content for each tab
    function loadTabContent(tab) {
        let content = '';

        switch (tab) {
            case 'overview':
                // Overview content is already in HTML
                break;

            case 'gallery':
                content = `
                    <div class="row">
                        <div class="col-12">
                            <div class="content-card">
                                <div class="card-header">
                                    <i class="bi bi-images card-icon"></i>
                                    <h5 class="card-title">Image Gallery</h5>
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-4">Gallery content will be displayed here. This section would typically contain project images, progress photos, and media files.</p>
                                    <div class="row">
                                        <div class="col-md-4 mb-3" id="Img1">
                                            <div class="bg-light p-4 text-center rounded">
                                                <img src="https://picsum.photos/1200/600?random=1" alt="Sample Image 1" class="img-fluid">
                                                <p class="mt-2 mb-0 text-muted">Sample Image 1</p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3" id="Img2">
                                            <div class="bg-light p-4 text-center rounded">
                                                <img src="https://picsum.photos/1200/600?random=2" alt="Sample Image 2" class="img-fluid">
                                                <p class="mt-2 mb-0 text-muted">Sample Image 2</p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3" id="Img3">
                                            <div class="bg-light p-4 text-center rounded">
                                                <img src="https://picsum.photos/1200/600?random=3" alt="Sample Image 3" class="img-fluid">
                                                <p class="mt-2 mb-0 text-muted">Sample Image 3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $('#gallery-content').html(content);
                break;

            case 'presentations':
                content = `
                    <div class="row">
                        <div class="col-12">
                            <div class="content-card">
                                <div class="card-header">
                                    <i class="bi bi-easel card-icon"></i>
                                    <h5 class="card-title">Presentations</h5>
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-4">Presentation files and project proposals will be available here.</p>
                                    <div class="list-group">
                                        <div class="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <i class="bi bi-file-earmark-ppt me-2 text-primary"></i>
                                                Project Proposal.pptx
                                            </div>
                                            <small class="text-muted">2.4 MB</small>
                                        </div>
                                        <div class="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <i class="bi bi-file-earmark-ppt me-2 text-primary"></i>
                                                Design Concepts.pptx
                                            </div>
                                            <small class="text-muted">1.8 MB</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $('#presentations-content').html(content);
                break;

            case 'documents':
                content = `
                    <div class="row">
                        <div class="col-12">
                            <div class="content-card">
                                <div class="card-header">
                                    <i class="bi bi-file-text card-icon"></i>
                                    <h5 class="card-title">Documents</h5>
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-4">Contract documents, agreements, and project files.</p>
                                    <div class="list-group">
                                        <div class="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <i class="bi bi-file-earmark-pdf me-2 text-danger"></i>
                                                Contract Agreement.pdf
                                            </div>
                                            <small class="text-muted">856 KB</small>
                                        </div>
                                        <div class="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <i class="bi bi-file-earmark-word me-2 text-primary"></i>
                                                Project Specifications.docx
                                            </div>
                                            <small class="text-muted">1.2 MB</small>
                                        </div>
                                        <div class="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <i class="bi bi-file-earmark-excel me-2 text-success"></i>
                                                Budget Breakdown.xlsx
                                            </div>
                                            <small class="text-muted">324 KB</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $('#documents-content').html(content);
                break;

            case 'media':
                content = `
                    <div class="row">
                        <div class="col-12">
                            <div class="content-card">
                                <div class="card-header">
                                    <i class="bi bi-camera-video card-icon"></i>
                                    <h5 class="card-title">Media Library</h5>
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-4">Video files, audio recordings, and multimedia content.</p>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div class="bg-light p-4 text-center rounded">
                                                <i class="bi bi-play-circle text-muted" style="font-size: 48px;"></i>
                                                <p class="mt-2 mb-0 text-muted">Project Walkthrough.mp4</p>
                                                <small class="text-muted">15.2 MB</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="bg-light p-4 text-center rounded">
                                                <i class="bi bi-music-note text-muted" style="font-size: 48px;"></i>
                                                <p class="mt-2 mb-0 text-muted">Client Interview.mp3</p>
                                                <small class="text-muted">8.7 MB</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $('#media-content').html(content);
                break;

            case 'dimensions':
                content = `
                    <div class="row">
                        <div class="col-12">
                            <div class="content-card">
                                <div class="card-header">
                                    <i class="bi bi-rulers card-icon"></i>
                                    <h5 class="card-title">Dimensions</h5>
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-4">Project measurements, specifications, and technical drawings.</p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="detail-item">
                                                <span class="detail-label">Width:</span>
                                                <span class="detail-value">24 feet</span>
                                            </div>
                                            <div class="detail-item">
                                                <span class="detail-label">Height:</span>
                                                <span class="detail-value">12 feet</span>
                                            </div>
                                            <div class="detail-item">
                                                <span class="detail-label">Depth:</span>
                                                <span class="detail-value">18 feet</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="detail-item">
                                                <span class="detail-label">Total Area:</span>
                                                <span class="detail-value">432 sq ft</span>
                                            </div>
                                            <div class="detail-item">
                                                <span class="detail-label">Material:</span>
                                                <span class="detail-value">Premium Wood</span>
                                            </div>
                                            <div class="detail-item">
                                                <span class="detail-label">Finish:</span>
                                                <span class="detail-value">Natural Stain</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $('#dimensions-content').html(content);
                break;

            case 'estimates':
                content = `
                    <div class="row">
                        <div class="col-12">
                            <div class="content-card">
                                <div class="card-header">
                                    <i class="bi bi-calculator card-icon"></i>
                                    <h5 class="card-title">Estimates</h5>
                                </div>
                                <div class="card-body">
                                    <p class="text-muted mb-4">Cost estimates, billing information, and financial details.</p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h6 class="text-primary mb-3">Cost Breakdown</h6>
                                            <div class="detail-item">
                                                <span class="detail-label">Materials:</span>
                                                <span class="detail-value">$8,500.00</span>
                                            </div>
                                            <div class="detail-item">
                                                <span class="detail-label">Labor:</span>
                                                <span class="detail-value">$5,250.00</span>
                                            </div>
                                            <div class="detail-item">
                                                <span class="detail-label">Equipment:</span>
                                                <span class="detail-value">$1,200.00</span>
                                            </div>
                                            <div class="detail-item">
                                                <span class="detail-label">Permits:</span>
                                                <span class="detail-value">$800.00</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <h6 class="text-primary mb-3">Payment Schedule</h6>
                                            <div class="detail-item">
                                                <span class="detail-label">Deposit (30%):</span>
                                                <span class="detail-value">$4,725.00</span>
                                            </div>
                                            <div class="detail-item">
                                                <span class="detail-label">Progress (40%):</span>
                                                <span class="detail-value">$6,300.00</span>
                                            </div>
                                            <div class="detail-item">
                                                <span class="detail-label">Final (30%):</span>
                                                <span class="detail-value">$4,725.00</span>
                                            </div>
                                            <div class="detail-item border-top pt-2 mt-2">
                                                <span class="detail-label"><strong>Total:</strong></span>
                                                <span class="detail-value"><strong>$15,750.00</strong></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $('#estimates-content').html(content);
                break;
        }
    }
    
    // Copy Link functionality
    $('.btn-outline-light:contains("Copy Link")').on('click', function (e) {
        e.preventDefault();

        // Create a temporary input to copy the URL
        const tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(window.location.href).select();
        document.execCommand('copy');
        tempInput.remove();

        // Show feedback
        const originalText = $(this).html();
        $(this).html('<i class="bi bi-check me-1"></i>Copied!');
        setTimeout(() => {
            $(this).html(originalText);
        }, 2000);
    });

    // Share functionality
    $('.btn-outline-light:contains("Share"), .btn-primary:contains("Share Portal")').on('click', function (e) {
        e.preventDefault();

        if (navigator.share) {
            navigator.share({
                title: 'Contract Client Portal - Default Media Gallery',
                text: 'Check out this client portal',
                url: window.location.href
            });
        } else {
            // Fallback - copy to clipboard
            const tempInput = $('<input>');
            $('body').append(tempInput);
            tempInput.val(window.location.href).select();
            document.execCommand('copy');
            tempInput.remove();

            alert('Link copied to clipboard!');
        }
    });

    // Test Tab functionality
    $('.btn-outline-secondary:contains("Test Tab")').on('click', function (e) {
        e.preventDefault();
        alert('Test Tab functionality activated!');
    });
    // click to open a slider - using event delegation for dynamically created elements
    $(document).on('click', '#Img1, #Img2, #Img3', function () {
        $('#myCarousel').removeClass('d-none');
        $('.darkshade').removeClass('d-none');
    });
    // click to close a slider
    $(document).on('click', '#closeCarousel', function () {
        $('#myCarousel').addClass('d-none');
        $('.darkshade').addClass('d-none');
    });
});

